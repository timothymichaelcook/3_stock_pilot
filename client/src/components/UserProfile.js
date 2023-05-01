import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { User_Profile } from '../utils/mutations';
import { Stock_Search } from '../utils/queries';

const UserProfile = () => {
  const [name, setName] = useState('');

  const [addUserProfile, { error }] = useMutation(User_Profile, {
    update(cache, { data: { UserProfile } }) {
      try {
        const { profiles } = cache.readQuery({ query: Stock_Search });

        cache.writeQuery({
          query: Stock_Search,
          data: { profiles: [...profiles, UserProfile] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUserProfile({
        variables: { name },
      });

      setName('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>New User...</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="New User..."
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add Profile
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default UserProfile;
