"use client";

import { Cloud, Code, Figma, Github, Globe, Layers, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabData = {
  frontend: [
    ["HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "Intermediate"],
    ["CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "Intermediate"],
    ["Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", "Intermediate"],
  ],

  backend: [
    ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "Intermediate"],
    ["Django", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", "Intermediate"],
    ["Django REST Framework", "https://cdn.simpleicons.org/django/092E20", "Intermediate"],
    ["FastAPI", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", "Familiar"],
    ["PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", "Learning"],
    ["REST APIs", "https://cdn.simpleicons.org/swagger/85EA2D", "Intermediate"],
    ["Authentication", "https://cdn.simpleicons.org/auth0/EB5424", "Intermediate"],
    ["Razorpay", "https://cdn.simpleicons.org/razorpay/0C2451", "Familiar"],
  ],

  mobile: [
    ["Kotlin", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", "Learning"],
    ["Android Studio", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg", "Learning"],
    ["Jetpack Compose", "https://cdn.simpleicons.org/jetpackcompose/4285F4", "Learning"],
    ["Room", "https://cdn.simpleicons.org/android/3DDC84", "Familiar"],
    ["Retrofit", "https://cdn.simpleicons.org/square/3E4348", "Familiar"],
    ["Firebase", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", "Familiar"],
    ["WhatsApp API", "https://cdn.simpleicons.org/whatsapp/25D366", "Familiar"],
  ],
  aiml: [
    ["Machine Learning", "https://cdn.simpleicons.org/scikitlearn/F7931E", "Familiar"],
    ["Scikit-learn", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", "Familiar"],
    ["XGBoost", "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F03ed6c27-13c2-4389-8c3f-5f172965f9ac_938x316.heic", "Familiar"],
    ["LightGBM", "https://upload.wikimedia.org/wikipedia/commons/d/d9/LightGBM_logo_black_text.svg", "Familiar"],
    ["NumPy", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", "Intermediate"],
    ["Pandas", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", "Intermediate"],
    ["AI Chatbot", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEVHcEz////////////////////////////////////////c3NzDw8PR0dHk5OQhISEBAQFBQUHx8PH4+Pi1tbVvb29fX1+goKAyMjJ8fHxUVFSLi4sMeaEqAAAAC3RSTlMAM4fC7P9gF9/gPkWZUYYAAAEnSURBVHgBZNJFgoQwAAVRrNqwH8Xuf8+JjHdtH8Sb79quH2Dou7b5323gu+H2h+4P/vS8/9iLt17/bZzmN71TWlYZabajo3Qv+CRn5YGgVCz8KOukFDdYdk3ggsjlNdc9eMGhDWYL51V2lPZOyq2rmAU2ShujyLVNR+oMJDRcOhh3+Ypd0wOLcAmlGDXBpIp9mdKf2IwzzDIjmKNOSkaT0I2GlDl04GRJFUzCoVBxJInxpOpODgOLqcPOGc+MQ1kQSB4mxVMVtZQFdRUn7WM5BZPQhbNupa04sknB4ZRwXV09hDrpdYIbYdMB8uSG74PPfzHJLLBFvg++eZByUakA+LpHnr8v2412lnatC6X72xMap+VjsGRCMIFBTOZEleJgJ5yo8WYHANTGFz9fuqJKAAAAAElFTkSuQmCC", "Familiar"],
  ],

  ai: [
    ["ChatGPT", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEVHcEz////////////////////////////////////////c3NzDw8PR0dHk5OQhISEBAQFBQUHx8PH4+Pi1tbVvb29fX1+goKAyMjJ8fHxUVFSLi4sMeaEqAAAAC3RSTlMAM4fC7P9gF9/gPkWZUYYAAAEnSURBVHgBZNJFgoQwAAVRrNqwH8Xuf8+JjHdtH8Sb79quH2Dou7b5323gu+H2h+4P/vS8/9iLt17/bZzmN71TWlYZabajo3Qv+CRn5YGgVCz8KOukFDdYdk3ggsjlNdc9eMGhDWYL51V2lPZOyq2rmAU2ShujyLVNR+oMJDRcOhh3+Ypd0wOLcAmlGDXBpIp9mdKf2IwzzDIjmKNOSkaT0I2GlDl04GRJFUzCoVBxJInxpOpODgOLqcPOGc+MQ1kQSB4mxVMVtZQFdRUn7WM5BZPQhbNupa04sknB4ZRwXV09hDrpdYIbYdMB8uSG74PPfzHJLLBFvg++eZByUakA+LpHnr8v2412lnatC6X72xMap+VjsGRCMIFBTOZEleJgJ5yo8WYHANTGFz9fuqJKAAAAAElFTkSuQmCC", "Advanced"],
    ["Claude", "https://cdn.simpleicons.org/claude/D97757", "Familiar"],
    ["Cursor", "https://cdn.simpleicons.org/cursor", "Intermediate"],
    ["GitHub Copilot", "https://cdn.simpleicons.org/githubcopilot/000000", "Familiar"],
    ["Gemini", "https://cdn.simpleicons.org/googlegemini/8E75B2", "Familiar"],
    ["Perplexity", "https://cdn.simpleicons.org/perplexity/1FB8CD", "Familiar"],
    ["Lovable", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACA0lEQVR4Ae3WA4ycURSG4dpuUCNWGdW2bdu2gyqu49S2bdv22uY//zm7392czc3Y0SR5d8fP1aBI9wV9gloILIxHVS+PAg5S10q7aVh5pnFlmeYUZ1pczKRlxVb4F5QZtW9I3LsaK3BaiQJwZbGCVhd771+wdet/AuqzE1C1sPghv4A8vt5Q7tCLXYEIK+E72GXhQQX2bcwCYkntgRicz2B2r53XqOdE5rYtmYbU1PfQFsUB8gdo9l3EMkugMktBJb+AxrArt3L6b2I1y76drVGBVTg4WFZkdOvSxGswe+g+tofKe1IPtyHstzpozRuM9AiMm/DzVsqo62wPFVgPkGAIe2826b7eIzBi/AfWUeyp2WuEggXXA4Kw77mtpqqwxG6Bj2em3vg++Q8Lag1jxsD1cBuQzA5rVCm9dzAOn9vg/RkJ/GrKP7YH48WA6+E2FNX3EKGwYRf52ai3MW6B+2alXb0wO4ORNfx31F0VXtA63P5xxEPz+biPKrfBDQssF/fMzSV0ZFYqCSw4wgtad2Pibws6OTUyGWHgboEzFtLBDfMtOWjrPIN0HMkg8N+67XPSYqUlC4zhboOzF1Iimr/QtOi4o+QxqxcY/xBWye23xZBFvHbsIvoycRH9FdRVMkA8J/+5Z/Ir7yl4ZuQifoyAywCsk/vwOKwMljH0qy0E+rU8nETuUS8ln6sAAAAASUVORK5CYII=", "Familiar"],
    ["Windsurf", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEVHcEz58+n68+n58+nv6uD++O7//PLi3dR3dXErLSoAAABLS0iHhYC7t68KDw5kY1+vrKTMyMADCwqfnJWSkIolXKNRAAAABHRSTlMArf+vt37rogAAAMJJREFUeAHN0tEOgyAMBVDsaJWLoID//62DMhZj4h72svXppkeBEoyZ6KYexjzotiZDH+pXaJl6yTwSse3Iy+g5uJfN8NJxdYocELGJLrFqUMQqDXfEiMBXRGJFIMJ2HMsm5Kx/+rRAu7IsiRXbd9ikomXxQKnxEB5zsgOCSGljIWMWOaoNnBGx72A9cnahOHkjSakKcIsbMuAHqvo2BmvOOZ6x75WhHU64ogSgcI+Hzn1C4tP9W+rx/57JRPTNk5/ME43DDFdF7xiFAAAAAElFTkSuQmCC", "Familiar"],
    ["Antigravity", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABLFBMVEVHcExDkOk3ifw0iv40iPYyifhGjfVRh/RQh/jvizo0iPgzifk1ivtvfdE1ivpNiOo2ivo9if5gr4lKpqc/nr48ivtAju82if48ivswjO1ViPI5if3wV0SsoZoyj+o0mPIvi/CFvmrrkyzwZjzCYHXajzrrXkOpaJC0t0bvW0DDYX+HtGfRX3DcXFOivlXieD3pV0qEuW0yiPy7uUfxhD83if88i/9eiu9hhuk0iP2dbqjTWmZ/gdTGXnk+ordQr52yZY9ctoyJeMJ4vm/rW0OMv1/WszHeoi68vkFwtXlGq6kxldUskOI2m8cvkOIxivE8lM41j+BHiPlOg+WQcqfUaVOum1W3q0iLmnN7e69bg8eycHRgirBjlp7BflZEht+YeIiEg5ChgHNqno0hSnXUAAAAT3RSTlMAJdI3/dwKAQMBFuyu/pZBiP36+/1UD2zz/f3mGgMpBWJOY3b2+dD93Eor/BH8LvuJEscZBEkdrvN6yMR7WHbMj5PtyeSQidV6/knvrcT4jLIn8QAAAUxJREFUKJGt0Od2gjAYBmB2WCJgARX3qtY66uzeeyE46+i8/3to1LYI2nP6o9+vJE/e5EsQ5F+KqdWYXyhcTSSSudBKZoqXV+lSprxSt66z/XSpe57cXBGMZ/u93nO3kMktR6sX+fxg8D7qFsqhJSye3cgfk7fXUWpvw21UXJZ9k/H4qbOeOqi52zmRfWut1nAI9djVEoMeQTPNl7bH09l1n3s7tYBhtKGeep0WPpwZQRAW5H3agepDyzT8ZKVC+q1gsEk5MHJnGpyAqyou6FZwG120aOwxwAkoQBCACjCrLJ7L3gcIHgfTIY3zktVUbQNe0iBjXxdRmi5hXmB/jwiD7PeswUt+kbKDmEHiP3tBnbSjdIQnuFh0oT2Nk3h0rqjA6aLjZZSoc2JjFlRIbIdFHMXuYFgdzHrXFJdBVbTI/GVR2m1wkQbLi3+vT/NkKnkCjEo1AAAAAElFTkSuQmCC", "Familiar"],
  ],

  database: [
    ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", "Intermediate"],
    ["SQLite", "https://cdn.simpleicons.org/sqlite/003B57", "Intermediate"],
    ["Firebase", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", "Familiar"],
    ["PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", "Familiar"],
  ],

  deployment: [
    ["AWS EC2", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", "Learning"],
    ["Vercel", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", "Intermediate"],
    ["Render", "https://cdn.simpleicons.org/render", "Intermediate"],
    ["PythonAnywhere", "https://cdn.simpleicons.org/pythonanywhere/1D92E0", "Intermediate"],
  ],

  tools: [
    ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", "Intermediate"],
    ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", "Intermediate"],
    ["VS Code", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", "Intermediate"],
    ["Postman", "https://cdn.simpleicons.org/postman/FF6C37", "Intermediate"],
    ["Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", "Familiar"],
    ["Canva", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", "Familiar"],
    ["NotebookLM", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIACAAIAMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAHCAMEBgUC/8QALRAAAQMCBQIFBAMBAAAAAAAAAQIDBAURBgcSITEAURMUIkGBMmFxoVJichX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3GZ2YcXBMJDTKESatISVMR1H0oTxrXbfTf297HjcgAFOxvjTEk02qtSWs3IjwVKQkD/KObdzc9B6pePsZ4bnb1ScVJI1xp6lOJI7FK9x8WPQMLlxjyFjemLcQjy8+PYSYxN7X4Uk+6T+uOxIAOutTMd5ryYfi2VJnqjoVyG2UEi9vslJP3N+/QEauv0jCbSqTT6/KosBk+Go0qnl1RcGxU/II9S/6ptbjew6DjyH5Et2nUrFk5nEeGa0fCp1bbaCHorx2G/KSDa6VX299lJ6DLZePS8IZrxYDqjqExVOfCRs4FK0D41aVD8DoL7amMC53Oyq0VtQ2ZT7wWlBVdt1C9BAHP1AfkHt0FJjNbEbtfEqoTA7TXXbP09baVM+CTujTb+O1+e9+gnOIMNw6ZVqZAkOKh/91idT0KaV6Gx9ZF+CE+nfcgdBaw80zjHPDz9MK3ISZnni5pKbIbsQSDvurSPnoC7mXl7DxvCQtLiYtUjpIYklNwRzoX3T+wTce4IL7WcucXUh8tP0OW+kE2diNl5Ch3um9vmx6CShZZ4urT4bao0iKi9lPTUFlCfv6hc/APQMRl3gaDgmlqZYX5ia/YyZJTbWRwkD2SOg/9k=", "Familiar"],
    ["CorelDRAW", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABp1BMVEVHcExWnZgrwOcRrkIoslXK4i0rtaxNnGnW0ygqud8vsVvNGSzC1zNXiFxDnly5HzKhMz7F1zEPrH80s1dcaGvN2i3N2izO2yzP3CvO3SztjSCVRlTq5RgjttadREanPzonpVQOmdlIt1k1tFljZmdzWm2CVlS30ji00TrpeyLsJiO20jnP2ysartQart7O2yznWSXtayLO2Sy3MjLtkiDioiQ2w9+NR2F0XXi+RTAzsFgTuVUDrmHL2S9/TndzVYptv09Dtlw/tVwCpFEZqtdmZmZmZma9MzEWnnTpUCTpSCVHs1JCvbXS3CmtPDaTyEWTSFTvNCPoUSSCakW4NzLqciM0uuLO6SvytBxeY5TqZyQ/l3GDR39+P5YYv08Qo9cGkIwPmNUPldI6xuoBq243rFcwyP8AqVICrGEsv9I5tFwbsV0Lr14os1rS3ikEq15FtlY2s1jrhSJmZmYQs11bulQOl1hLt1UMmYE8tVhpvVHX5yOaREm+1TYxqVkCj1Anr1kZn1sQo+GIR3OgzD/pVyTrcyPu2BruWyKDZUTqYyQrs8ActJUKypgZAAAAa3RSTlMABT04JSUPCRccXiM1Fh9xRkQwT5OuZoDdiIMx/oGFy9q+bcaAxHfGZWY7nXNh3/WlPbuPzblurGr67Mri3FXMKJHPo6Cw6l1ziqx+qaarwtOC4J6oKc/m6t70NphC+tFEgWDY35Cms2O95djxuIAAAAGuSURBVCiRfdHnUxoBEAXwx3Fwd/QmIB3L2HsDI9hNTKIpmmJJj/X6IRCkWNPUP1pMxgOxvG87v5mdN7uAmq9fmOgnR1eQQm0YJjqjiR4fdzNd3YRef8OGmW9v8flHOU8QPCeGqzVI7FyQmD44yGQiQKTEPNeoRmxqxS1gjBMzmSMzDKUN5zMVZ4hpcRsUx+2x7JEWltIoOaXid+2Y6AD5D3knqIhMTqrYSPKsGY7/aICmMWdoUPERmcteochdY0MFV9Y+yhZMpCWWu0JqSnZW1o5/GD8s98im99M864R+d3/ihYqx5PpJDFROKrOkBV1M2FtU9DcnT0aAUVmSsqc62Isdra2VC42YCy/LvXheFgJAfdHUoqugLRQq+LG0dxjIe4GEYOqoPnzYX7DC+jcfEBZgEtx1umq0hcJh2JTfeaETnh5T3Y2XYdEWN9LvFUGwo8dTYzAOLA9gUFHe0Xav212DeGyNw6f8GUK/x1NrgHXI1/fr7BXt7aRvo6Zt8M3qT2N/ve62AbSvrfd1e++dBlB980/bjXfbw6GaXC6X5T5tTqXmzPdhUyo1Wz1fAsSlWQdipSLBAAAAAElFTkSuQmCC", "Familiar"],
  ],
} as const;

const allTech = [
  ...tabData.frontend,
  ...tabData.backend,
  ...tabData.mobile,
  ...tabData.aiml,
  ...tabData.ai,
  ...tabData.database,
  ...tabData.deployment,
  ...tabData.tools,
];

function TechMarquee({ items }: { items: readonly (readonly [string, string, string])[] }) {
  // Duplicate items for seamless loop
  const doubleItems = [...items, ...items, ...items];

  return (
    <div className="group/marquee relative flex w-full overflow-hidden py-20 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#0A0F1F] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-[#0A0F1F] after:to-transparent">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-fast {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      <div
        className="animate-marquee-fast flex shrink-0 items-center gap-24 px-6 group-hover/marquee:[animation-play-state:paused]"
      >
        {doubleItems.map(([name, icon], i) => (
          <div key={`${name}-${i}`} className="group relative flex flex-col items-center">
             <div className="relative z-10 flex h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 items-center justify-center rounded-full border border-white/20 bg-white transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_20px_60px_rgba(37,99,235,0.2)]" style={{ willChange: "transform" }}>
                <motion.img 
                  src={icon} 
                  alt={`${name} logo`} 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 object-contain transition-all duration-300" 
                />
                
                {/* Subtle Hover Aura */}
                <div className="absolute inset-0 -z-10 rounded-full bg-accent/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
             </div>
             <span className="mt-4 text-xs font-black tracking-[0.3em] text-white/50 uppercase transition-all duration-300 group-hover:scale-110 group-hover:text-accent">
                {name}
             </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechGrid() {
  return (
    <motion.section
      id="tech"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative overflow-hidden bg-[#0A0F1F] pt-12 pb-32"
    >
      <div className="section-container relative z-10 px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
              Technology Stack
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
              Powering <span className="text-accent">Innovation</span>
            </h2>
          </motion.div>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="mb-16 flex justify-center">
            <TabsList className="flex h-auto flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-md">
              {[
                { value: "frontend", label: "Frontend" },
                { value: "backend", label: "Backend" },
                { value: "mobile", label: "Mobile" },
                { value: "aiml", label: "AI/ML" },
                { value: "ai", label: "AI Tools" },
                { value: "database", label: "Database" },
                { value: "deployment", label: "Deployment" },
                { value: "tools", label: "Tools" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-full px-6 py-2.5 text-[10px] font-bold tracking-widest text-white/50 uppercase transition-all data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:shadow-sm"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative">
            <hr className="border-white/5" />
            
            <div className="">
              <TabsContent value="frontend" className="m-0 focus-visible:outline-none">
                <TechMarquee items={tabData.frontend} />
              </TabsContent>
              <TabsContent value="backend" className="m-0 focus-visible:outline-none">
                <TechMarquee items={tabData.backend} />
              </TabsContent>
              <TabsContent value="mobile" className="m-0 focus-visible:outline-none">
                <TechMarquee items={tabData.mobile} />
              </TabsContent>
              <TabsContent value="aiml" className="m-0 focus-visible:outline-none">
                <TechMarquee items={tabData.aiml} />
              </TabsContent>
              <TabsContent value="ai" className="m-0 focus-visible:outline-none">
                <TechMarquee items={tabData.ai} />
              </TabsContent>
              <TabsContent value="database" className="m-0 focus-visible:outline-none">
                <TechMarquee items={tabData.database} />
              </TabsContent>
              <TabsContent value="deployment" className="m-0 focus-visible:outline-none">
                <TechMarquee items={tabData.deployment} />
              </TabsContent>
              <TabsContent value="tools" className="m-0 focus-visible:outline-none">
                <TechMarquee items={tabData.tools} />
              </TabsContent>
            </div>

            <hr className="border-white/5" />
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
