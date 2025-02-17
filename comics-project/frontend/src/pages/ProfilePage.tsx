import React from 'react';
import { useUserContext } from '../hooks/useUserContext';
import { FcLike } from 'react-icons/fc';
import ProfileStats from '../components/ProfileStats';
import ModalLayout from '../components/ModalLayout';

const ProfilePage = () => {
  const { user } = useUserContext();
  console.log(user);
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="card lg:card-side bg-base-200 shadow-xl text-lg ">
        <figure>
          <img src={user?.picture} alt="Album" />
        </figure>
        <div className="card-body gap-5">
          <h2 className="card-title text-2xl text-primary">{user?.username}</h2>
          {user && (
            <div>
              {Object.entries(user).map(([key, value]) => {
                if (['email', 'username'].includes(key)) {
                  return (
                    <p>
                      <span className="text-primary font-bold text-xl capitalize">
                        {key} :{' '}
                      </span>{' '}
                      {value}
                    </p>
                  );
                }
              })}
            </div>
          )}

          <ProfileStats value={user?.likes?.length} title="likes" />

          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-md">
              edit your profile
            </button>
            <button
              className="btn btn-outline btn-error btn-md"
              onClick={() =>
                (
                  document.getElementById('modal-profile') as HTMLDialogElement
                ).showModal()
              }
            >
              Delete your account
            </button>
          </div>
        </div>
      </div>
      <ModalLayout id="modal-profile">
        <h3 className="text-lg font-bold text-error">Are you sure?</h3>
        <p className="py-4">Do you want to delete this account ? </p>
      </ModalLayout>
    </div>
  );
};

export default ProfilePage;
