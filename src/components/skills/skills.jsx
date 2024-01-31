import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './skills.scss';

const SkillWordCloud = () => {
    const skills = [
        { text: 'JavaScript', value: 50 },
        { text: 'React', value: 30 },
        { text: 'CSS', value: 25 },
        { text: 'HTML5', value: 25 },
        { text: 'Node.js', value: 40 },
        { text: 'Express.js', value: 30 },
        { text: 'MongoDB', value: 35 },
        { text: 'RESTful API', value: 30 },
        { text: 'Git', value: 25 },
        { text: 'Webpack', value: 20 },
        { text: 'SASS/SCSS', value: 20 },
        { text: 'Responsive Design', value: 25 },
        { text: 'Figma', value: 20 },
        { text: 'Wordpress', value: 15 },
        { text: 'MS', value: 20 },
        { text: 'Communication', value: 15 },
        { text: 'TeamWork', value: 25 },
        { text: 'SQL', value: 25 },
        { text: 'Agile Methodology', value: 15 },
        { text: 'PostgreSQL', value: 25 },
        { text: 'Trello', value: 20 },
        { text: 'GitHub', value: 20 },
        { text: 'Linux', value: 15 },
        { text: 'UI/UX Design', value: 20 },
        { text: 'Deploy', value: 15 },
        { text: 'Odoo System', value: 25 },
        { text: 'Python', value: 30 },
        { text: 'FLask', value: 15 },
        { text: 'Laravel', value: 20 },
        { text: 'Design Patterns', value: 30 },
        { text: 'Java', value: 40 },
        { text: 'Algorithms', value: 25 },
        { text: 'XML', value: 40 },
        { text: 'Problem Solving', value: 50 },
        { text: '   Time management', value: 25 },
        { text: 'ERP System', value: 50 },
        { text: 'Woocommerce', value: 25 },
        { text: 'Vercel', value: 40 },
        { text: 'Frameworks', value: 40 },
        { text: 'Libraries', value: 50 },
        { text: 'SEO', value: 25 },
        { text: ' Testing and Debugging', value: 50 },
        { text: 'Attention to Detail', value: 15 },
        { text: 'Creativity ', value: 40 },
        { text: 'Design', value: 40 },
        { text: 'Self learning', value: 15 },












     










      ];
      
  const options = {
    rotations: 2,
    rotationAngles: [0, 90],
    fontSizes: [40, 60],
    padding: 30,
  };

  return (
    <div className='skillsContainer'>
    <div className="skillsTitle">
    <h1>Skills</h1>
    </div>  
    <div className="skill-wordcloud">
    
      <ReactWordcloud words={skills} options={options} />
    </div>
    </div>
  );
};

export default SkillWordCloud;
