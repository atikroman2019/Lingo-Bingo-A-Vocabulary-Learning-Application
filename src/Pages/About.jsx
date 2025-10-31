import React from "react";

const About = () => {
    return (
        <div className="w-11/12 mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                About Me
            </h1>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* ---- Left Section: About Text ---- */}
                <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        👋 Hi! I’m <span className="font-semibold text-gray-800">Atikur Rahman </span>,
                        a passionate <span className="font-semibold">Frontend Developer </span>
                        who loves building modern, user-friendly, and fully responsive web applications.
                        I specialize in turning ideas and designs into real working products using
                        <span className="text-blue-600"> React.js</span>, <span className="text-blue-600">Tailwind CSS</span>,
                        and <span className="text-blue-600">Firebase</span>.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        I’m currently focused on improving my full-stack development skills, learning
                        <span className="text-green-600"> Node.js</span> and <span className="text-green-600">MongoDB</span>.
                        I love solving problems, creating clean UI/UX, and experimenting with new technologies.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        🚀 My goal is to build impactful projects that help people learn, grow, or make their lives easier.
                    </p>
                </div>

                {/* ---- Right Section: Skills / Projects ---- */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
                    <h2 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-2">
                        Skills & Tools
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 mb-5 space-y-1">
                        <li>HTML5, CSS3, Tailwind CSS</li>
                        <li>JavaScript (ES6+), React.js, React Router</li>
                        <li>Firebase Authentication & Hosting</li>
                        <li>Responsive Web Design</li>
                        <li>Git, GitHub, and Deployment (Netlify / Firebase)</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-2">
                        Featured Projects
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>🧠 Vocabulary Learning App – Learn words interactively</li>
                        <li>🎨 Portfolio Website – Built with React and Tailwind</li>
                        <li>💰 Crypto Faucet Website – Reward-based system using APIs</li>
                    </ul>
                </div>
            </div>

            {/* ---- Footer Note ---- */}
            <div className="text-center mt-10">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Atikur Rahman. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default About;
