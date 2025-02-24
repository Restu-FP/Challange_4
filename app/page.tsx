import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <header className="bg-gradient-to-r from-blue-300 to-red-300 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-32 h-16">
                <Image
                  src="/image/logo.png"
                  alt="Kelas Bang Dream Logo"
                  fill
                  className="hover:scale-110 transition-transform duration-300 object-contain"
                />
              </div>
              <h1 
                className="text-3xl sm:text-4xl font-bold text-white tracking-wider hover:text-pink-200 transition-colors duration-300"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                  background: 'linear-gradient(to right, #fff, #ffd1ec)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shimmer 2s infinite linear',
                }}
              >
                Kelas Bang Dream
              </h1>
            </div>
          </div>
        </header>

        {/* Rest of the component remains the same */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8">
            {[
              {
                name: "Roselia",
                members: [
                  { name: "Sayo Hikawa", image: "/image/sayo.jpg" },
                  { name: "Yukina Minato", image: "/image/yukina.jpg" },
                  { name: "Lisa Imai", image: "/image/lisa.jpg" },
                  { name: "Ako Udagawa", image: "/image/ako.jpg" },
                  { name: "Rinko Shirokane", image: "/image/rinko.jpg" },
                ],
              },
              {
                name: "MyGo!!!!!",
                members: [
                  { name: "Tomori Takamatsu", image: "/image/tomori.jpg" },
                  { name: "Anon Matsubara", image: "/image/anon.jpg" },
                  { name: "Rana Kaname", image: "/image/rana.jpg" },
                  { name: "Nagasaki Soyo", image: "/image/Soyo.jpg" },
                  { name: "Shiina Taki", image: "/image/Taki.jpg" },
                ],
              },
              {
                name: "Ave Mujica",
                members: [
                  { name: "Misumi Uika", image: "/image/uika.jpg" },
                  { name: "Wakaba Mutsumi", image: "/image/mutsumi.jpg" },
                  { name: "Yahata Umiri", image: "/image/umiri.jpg" },
                  { name: "Togawa Sakiko", image: "/image/sakiko.jpg" },
                  { name: "Yuutenji Nyamu", image: "/image/nyamu.jpg" },
                ],
              },
            ].map((band) => (
              <div
                key={band.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-6 text-purple-600 dark:text-purple-400">
                    {band.name}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-6">
                    {band.members.map((member) => (
                      <div
                        key={member.name}
                        className="flex flex-col items-center group"
                      >
                        <div className="relative w-24 h-24 mb-3">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 object-cover"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {member.name}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 font-medium">
                      <i className="fas fa-plus mr-2" />
                      Assign Peserta Kelas
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm py-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8">
              <a
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/file.svg" alt="File icon" width={16} height={16} />
                <span className="hover:underline underline-offset-4">Learn</span>
              </a>
              <a
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                href="https://vercel.com/templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                <span className="hover:underline underline-offset-4">
                  Examples
                </span>
              </a>
              <a
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
                <span className="hover:underline underline-offset-4">
                  Go to nextjs.org →
                </span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}