import { ProfileSide } from '@/components/shared/profile-side';
import { ProfileData } from './components/profile-data';

const ProfilePage = () => {
  return (
    <div className='px-4 py-20 pb-12 md:px-30 md:py-32'>
      <div className='flex md:gap-8'>
        <ProfileSide />
        <div className='flex h-fit w-full flex-col gap-4 md:gap-6'>
          <span className='md:display-md-extrabold display-xs-extrabold text-neutral-950'>
            Profile
          </span>

          <ProfileData />
        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
