"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { sectionVariants } from "@/lib/utils";
import { useState, useEffect } from "react";
import Image from "next/image";

/* ─── Technology Data ─── */

const innerOrbit = [
  { label: "Python", emoji: "🐍", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { label: "Java", emoji: "☕", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { label: "Kotlin", emoji: "🤖", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  { label: "PHP", emoji: "🐘", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { label: "HTML5", emoji: "🌐", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { label: "CSS3", emoji: "🎨", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
];

const middleOrbit = [
  { label: "Django", emoji: "🌿", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { label: "DRF", emoji: "🔗", icon: "https://cdn.simpleicons.org/django/092E20" },
  { label: "FastAPI", emoji: "⚡", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { label: "Scikit-learn", emoji: "🧠", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { label: "XGBoost", emoji: "🚀" },
  { label: "LightGBM", emoji: "💡" },
  { label: "NumPy", emoji: "🔢", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { label: "Pandas", emoji: "🐼", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { label: "OpenCV", emoji: "👁️", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { label: "Bootstrap", emoji: "🅱️", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { label: "Tailwind", emoji: "🌊", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { label: "Framer", emoji: "✨", icon: "https://cdn.simpleicons.org/framer" },
  { label: "Jetpack", emoji: "📱", icon: "https://cdn.simpleicons.org/android/3DDC84" },
  { label: "Retrofit", emoji: "🔄", icon: "https://cdn.simpleicons.org/square/000000" },
  { label: "Room", emoji: "🗄️", icon: "https://cdn.simpleicons.org/sqlite/003B57" },
  { label: "Firebase", emoji: "🔥", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { label: "Redis", emoji: "⚙️", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
];

const outerOrbit = [
  { label: "Git", emoji: "📝", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { label: "GitHub", emoji: "🐙", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { label: "VS Code", emoji: "💻", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { label: "Android Studio", emoji: "📲", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
  { label: "AWS EC2", emoji: "☁️", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { label: "Python\nAnywhere", emoji: "🐍", icon: "https://cdn.simpleicons.org/pythonanywhere" },
  { label: "Vercel", emoji: "▲", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { label: "Razorpay", emoji: "💳", icon: "https://cdn.simpleicons.org/razorpay" },
  { label: "MetaMask", emoji: "🦊" },
  { label: "Canva", emoji: "🖌️", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
  { label: "Figma", emoji: "🎯", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { label: "EmailJS", emoji: "📧", icon: "https://cdn.simpleicons.org/maildotru" },
  { label: "Docker", emoji: "🐳", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { label: "Postman", emoji: "📬", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { label: "Cursor", emoji: "⌨️", icon: "https://cdn.simpleicons.org/cursor" },
  { label: "Claude", emoji: "🤝", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAHlBMVEXaakbadlbacU/WXzP++vj77ur12tPhknruxLjorp60qBrXAAAABHRSTlP+/v7+ukpK/AAAAQJJREFUKJG1UUluBCEMLLz7/x9OGeiew0g5JUYIcC02gPVL4A/AlC/yc0BZEU0/nJvkfo4IdywpI4hXQYhDJN1bqF9C3k0OuCQTKEoRxumU3waogntB3FojtGwOkxbIrO0eaHO1SqODHF/IpqSbczaH2VZ9lMKSZiQQojn0BYkwNDdiFtlsyXFAdFV1Z4bd8Oi8SqyqCD7CkUYvVcVju31V1wVH6o2n5sArLDZamhW8mbxjms22Yice7BbYklN1qGnJzqy5HfrMrctIXTRkKb5P+OTPDXEWPiv4AGmhze1NH6x8jTG0PPU28mqDf9zOr5PIT/ZSxqin2Gn1zX/WR/O/8QPwmAb3rsSAHQAAAABJRU5ErkJggg==" },
  { label: "ChatGPT", emoji: "💬", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEVHcEz////////////////////////////////////////c3NzDw8PR0dHk5OQhISEBAQFBQUHx8PH4+Pi1tbVvb29fX1+goKAyMjJ8fHxUVFSLi4sMeaEqAAAAC3RSTlMAM4fC7P9gF9/gPkWZUYYAAAEnSURBVHgBZNJFgoQwAAVRrNqwH8Xuf8+JjHdtH8Sb79quH2Dou7b5323gu+H2h+4P/vS8/9iLt17/bZzmN71TWlYZabajo3Qv+CRn5YGgVCz8KOukFDdYdk3ggsjlNdc9eMGhDWYL51V2lPZOyq2rmAU2ShujyLVNR+oMJDRcOhh3+Ypd0wOLcAmlGDXBpIp9mdKf2IwzzDIjmKNOSkaT0I2GlDl04GRJFUzCoVBxJInxpOpODgOLqcPOGc+MQ1kQSB4mxVMVtZQFdRUn7WM5BZPQhbNupa04sknB4ZRwXV09hDrpdYIbYdMB8uSG74PPfzHJLLBFvg++eZByUakA+LpHnr8v2412lnatC6X72xMap+VjsGRCMIFBTOZEleJgJ5yo8WYHANTGFz9fuqJKAAAAAElFTkSuQmCC" },
  { label: "Gemini", emoji: "♊", icon: "data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12%202C12%207.523%2016.477%2012%2022%2012C16.477%2012%2012%2016.477%2012%2022C12%2016.477%207.523%2012%202%2012C7.523%2012%2012%207.523%2012%202Z%22%20fill%3D%22%231E88E5%22%2F%3E%3Cpath%20d%3D%22M19%2015C19%2016.657%2020.343%2018%2022%2018C20.343%2018%2019%2019.343%2019%2021C19%2019.343%2017.657%2018%2016%2018C17.657%2018%2019%2016.657%2019%2015Z%22%20fill%3D%22%231E88E5%22%2F%3E%3C%2Fsvg%3E" },
  { label: "Windsurf", emoji: "🏄", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEVHcEz58+n68+n58+nv6uD++O7//PLi3dR3dXErLSoAAABLS0iHhYC7t68KDw5kY1+vrKTMyMADCwqfnJWSkIolXKNRAAAABHRSTlMArf+vt37rogAAAMJJREFUeAHN0tEOgyAMBVDsaJWLoID//62DMhZj4h72svXppkeBEoyZ6KYexjzotiZDH+pXaJl6yTwSse3Iy+g5uJfN8NJxdYocELGJLrFqUMQqDXfEiMBXRGJFIMJ2HMsm5Kx/+rRAu7IsiRXbd9ikomXxQKnxEB5zsgOCSGljIWMWOaoNnBGx72A9cnahOHkjSakKcIsbMuAHqvo2BmvOOZ6x75WhHU64ogSgcI+Hzn1C4tP9W+rx/57JRPTNk5/ME43DDFdF7xiFAAAAAElFTkSuQmCC" },
  { label: "Antigravity", emoji: "🛸", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABLFBMVEVHcExDkOk3ifw0iv40iPYyifhGjfVRh/RQh/jvizo0iPgzifk1ivtvfdE1ivpNiOo2ivo9if5gr4lKpqc/nr48ivtAju82if48ivswjO1ViPI5if3wV0SsoZoyj+o0mPIvi/CFvmrrkyzwZjzCYHXajzrrXkOpaJC0t0bvW0DDYX+HtGfRX3DcXFOivlXieD3pV0qEuW0yiPy7uUfxhD83if88i/9eiu9hhuk0iP2dbqjTWmZ/gdTGXnk+ordQr52yZY9ctoyJeMJ4vm/rW0OMv1/WszHeoi68vkFwtXlGq6kxldUskOI2m8cvkOIxivE8lM41j+BHiPlOg+WQcqfUaVOum1W3q0iLmnN7e69bg8eycHRgirBjlp7BflZEht+YeIiEg5ChgHNqno0hSnXUAAAAT3RSTlMAJdI3/dwKAQMBFuyu/pZBiP36+/1UD2zz/f3mGgMpBWJOY3b2+dD93Eor/BH8LvuJEscZBEkdrvN6yMR7WHbMj5PtyeSQidV6/knvrcT4jLIn8QAAAUxJREFUKJGt0Od2gjAYBmB2WCJgARX3qtY66uzeeyE46+i8/3to1LYI2nP6o9+vJE/e5EsQ5F+KqdWYXyhcTSSSudBKZoqXV+lSprxSt66z/XSpe57cXBGMZ/u93nO3kMktR6sX+fxg8D7qFsqhJSye3cgfk7fXUWpvw21UXJZ9k/H4qbOeOqi52zmRfWut1nAI9djVEoMeQTPNl7bH09l1n3s7tYBhtKGeep0WPpwZQRAW5H3agepDyzT8ZKVC+q1gsEk5MHJnGpyAqyou6FZwG120aOwxwAkoQBCACjCrLJ7L3gcIHgfTIY3zktVUbQNe0iBjXxdRmi5hXmB/jwiD7PeswUt+kbKDmEHiP3tBnbSjdIQnuFh0oT2Nk3h0rqjA6aLjZZSoc2JjFlRIbIdFHMXuYFgdzHrXFJdBVbTI/GVR2m1wkQbLi3+vT/NkKnkCjEo1AAAAAElFTkSuQmCC" },
];

/* ─── OrbitItem ─── */
function OrbitItem({
  angle,
  label,
  emoji,
  icon,
  radius,
  counterClass,
  size = "md",
}: {
  angle: number;
  label: string;
  emoji: string;
  icon?: string;
  radius: number;
  counterClass: string;
  size?: "xs" | "sm" | "md" | "lg";
}) {
  const [imgError, setImgError] = useState(false);

  const rad = (angle * Math.PI) / 180;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);

  const sizeClasses = {
    xs: "h-[30px] min-w-[30px] px-1",
    sm: "h-[36px] min-w-[36px] px-1.5",
    md: "h-[42px] min-w-[42px] px-2",
    lg: "h-[44px] min-w-[44px] px-2",
  };

  const iconSizeClasses = {
    xs: "h-3 w-3",
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-4 w-4",
  };

  const emojiSize = {
    xs: "text-[10px]",
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const labelSize = {
    xs: "text-[5px]",
    sm: "text-[6px]",
    md: "text-[7px]",
    lg: "text-[8px]",
  };

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
    >
      <div
        className={`flex ${sizeClasses[size]} flex-col items-center justify-center gap-0.5 rounded-xl border border-white/10 bg-white/[0.06] shadow-[0_10px_24px_rgba(37,99,235,0.08)] backdrop-blur-sm ${counterClass}`}
      >
        {icon && !imgError ? (
          <Image 
            src={icon} 
            alt={`${label} logo`} 
            width={32}
            height={32}
            className={`${iconSizeClasses[size]} object-contain`}
            onError={() => setImgError(true)}
          />
        ) : (
          <span className={emojiSize[size]} aria-hidden="true">{emoji}</span>
        )}
        <span
          className={`${labelSize[size]} font-semibold tracking-wide text-white/60 whitespace-nowrap`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function TechStackOrbit() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fixed Desktop Radii
  const innerRadius = 80;
  const middleRadius = 140;
  const outerRadius = 210;

  // Fixed Diameters
  const innerDia = innerRadius * 2;
  const middleDia = middleRadius * 2;
  const outerDia = outerRadius * 2;

  // Fixed Card Sizes
  const innerSize = "md";
  const middleSize = "sm";
  const outerSize = "md";

  // Fixed Particle count
  const particleCount = 12;

  if (!mounted) return <section className="min-h-[460px] py-16" />;

  return (
    <motion.section
      id="ecosystem"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="bg-[#050816] pt-8 pb-32 overflow-hidden"
    >
      {/* ── Section Header ── */}
      <div className="section-container text-center mb-16">
        <p className="mb-4 text-xs font-semibold tracking-widest text-accent uppercase">
          Engineering Foundation
        </p>
        <h2 className="text-7xl font-black leading-tight text-white">
          Tech Ecosystem
        </h2>
      </div>

      {/* ── Fixed Orbit System ── */}
      <div className="relative flex h-[500px] items-center justify-center">
        {/* Center icon */}
        <div className="absolute inset-0 m-auto z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-white/[0.06] shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-sm">
          <Code className="h-7 w-7" color="#2563EB" />
        </div>

        {/* Orbit ring lines (dashed) */}
        <div className="absolute inset-0 m-auto animate-[spin_50s_linear_infinite] rounded-full border-2 border-dashed border-blue-400/20" style={{ height: innerDia, width: innerDia }} />
        <div className="absolute inset-0 m-auto animate-[spin_70s_linear_infinite_reverse] rounded-full border-2 border-dashed border-blue-400/15" style={{ height: middleDia, width: middleDia }} />
        <div className="absolute inset-0 m-auto animate-[spin_90s_linear_infinite] rounded-full border-2 border-dashed border-blue-400/10" style={{ height: outerDia, width: outerDia }} />

        {/* Inner Orbit — Programming Languages (anti-clockwise, fast) */}
        <div className="absolute inset-0 m-auto animate-[spin_22s_linear_infinite_reverse]" style={{ height: innerDia, width: innerDia }}>
          {innerOrbit.map((tech, i) => (
            <OrbitItem
              key={tech.label}
              angle={(360 / innerOrbit.length) * i}
              label={tech.label}
              emoji={tech.emoji}
              icon={tech.icon}
              radius={innerRadius}
              size={innerSize}
              counterClass="animate-[spin_22s_linear_infinite]"
            />
          ))}
        </div>

        {/* Middle Orbit — Frameworks & Libraries (clockwise, medium) */}
        <div className="absolute inset-0 m-auto animate-[spin_36s_linear_infinite]" style={{ height: middleDia, width: middleDia }}>
          {middleOrbit.map((tech, i) => (
            <OrbitItem
              key={tech.label}
              angle={(360 / middleOrbit.length) * i}
              label={tech.label}
              emoji={tech.emoji}
              icon={tech.icon}
              radius={middleRadius}
              size={middleSize}
              counterClass="animate-[spin_36s_linear_infinite_reverse]"
            />
          ))}
        </div>

        {/* Outer Orbit — Tools & Platforms (anti-clockwise, slow) */}
        <div className="absolute inset-0 m-auto animate-[spin_54s_linear_infinite_reverse]" style={{ height: outerDia, width: outerDia }}>
          {outerOrbit.map((tech, i) => (
            <OrbitItem
              key={tech.label}
              angle={(360 / outerOrbit.length) * i}
              label={tech.label}
              emoji={tech.emoji}
              icon={tech.icon}
              radius={outerRadius}
              size={outerSize}
              counterClass="animate-[spin_54s_linear_infinite]"
            />
          ))}
        </div>

        {/* Ambient floating particles */}
        {[...Array(particleCount)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-blue-200/70"
            style={{
              top: `${6 + i * 7.5}%`,
              left: `${12 + ((i * 14) % 76)}%`,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}
