'use client';
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader } from "lucide-react";

const Home = async () => {
  const { data: session, status } = useSession();
  // const router = useRouter();

  if (status === 'loading' || !session) {
    return <Loader className="animate-spin" />; // Show a loader while checking or redirecting
  }
  
  return (
    <div className="text-center p-20">
      <h1 className="text-5xl font-extrabold">Welcome to Our Website</h1>
      <p className="mt-4 text-lg">
        This is the dashboard page
      </p>
    </div>
  );
};

export default Home;