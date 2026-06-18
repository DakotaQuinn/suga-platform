"use client";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-2xl">

      <div className="max-w-3xl mx-auto flex justify-around items-center py-4 text-sm font-semibold">

        <button className="flex flex-col items-center">
          🏠
          <span>Home</span>
        </button>

        <button className="flex flex-col items-center">
          🔍
          <span>Discover</span>
        </button>

        <button className="flex flex-col items-center">
          ❤️
          <span>Favorites</span>
        </button>

        <button className="flex flex-col items-center">
          💬
          <span>Messages</span>
        </button>

        <button className="flex flex-col items-center">
          👤
          <span>Profile</span>
        </button>

      </div>

    </nav>
  );
}
