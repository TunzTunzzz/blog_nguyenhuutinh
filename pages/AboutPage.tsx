import React from 'react';

export const AboutPage: React.FC = () => {
  const skills = [
    "ReactJS", "TypeScript", "TailwindCSS", "Node.js", "Figma", "UI/UX Design", "Git", "REST API"
  ];

  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2021 - Hiện tại",
      description: "Xây dựng các ứng dụng web quy mô lớn, tối ưu hóa hiệu năng và dẫn dắt đội ngũ junior."
    },
    {
      role: "Web Developer",
      company: "Creative Agency",
      period: "2019 - 2021",
      description: "Phát triển landing page, website thương mại điện tử cho khách hàng đa dạng."
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="border-b-2 border-black pb-6">
        <h2 className="text-4xl font-black uppercase mb-4">Về Tôi</h2>
        <p className="text-xl max-w-3xl leading-relaxed">
          Tôi không chỉ viết code, tôi giải quyết vấn đề. Với 5 năm kinh nghiệm, tôi tin rằng một sản phẩm tốt phải là sự cân bằng hoàn hảo giữa <span className="bg-accent text-white px-1">thẩm mỹ</span> và <span className="bg-dark text-white px-1">hiệu năng</span>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
            <span className="block w-4 h-4 bg-accent border-2 border-black"></span>
            Kỹ Năng Vũ Khí
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="border-2 border-black px-3 py-1 bg-white font-bold hover:bg-black hover:text-white transition-colors cursor-default shadow-hard-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
            <span className="block w-4 h-4 bg-dark border-2 border-black"></span>
            Hành Trình
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-black">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-black"></div>
                <h4 className="text-xl font-bold">{exp.role}</h4>
                <div className="text-accent font-mono font-bold text-sm mb-2">@ {exp.company} // {exp.period}</div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};