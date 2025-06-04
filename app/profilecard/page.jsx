// app/profilecard/page.jsx
import ProfileCard from '@/components/ProfileCard';

export default function ProfileCardPage() {
  return (
    <main>
      <ProfileCard />
    </main>
  );
}

// Optional: Add metadata for the page
export const metadata = {
  title: 'Profile Card - 3D Flip Animation',
  description: 'Interactive 3D flip profile card with smooth animations',
};