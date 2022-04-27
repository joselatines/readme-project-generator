import { useSelector } from 'react-redux';
import { Container } from './styles';

const Markdown = () => {
	const template = useSelector(state => state.fieldsData.template);
	console.log(template);

	const md =
		`# ${template.title} 💻 \n
        ## Description 📚\n` +
		` ${template.description}\n` +
		`## Installation 🛠\n` +
		` ${template.installation}\n`;
	/* 	`## App features 💎\n` +
		`${featuresList()} \n` +
		`## Languages 🛠 \n` +
		`${toolsList(languages)} \n` +
		`## Frameworks 🧰\n` +
		`${toolsList(frameworks)} \n` +
		`## Tools used ⚙\n` +
		`${toolsList(tools)} \n` +
		`## Lets connect! 📲\n` +
		`${socialMediaLinks()}`; */

	const templateMarkdown = `# Title
    ## Description
    Brief description
    
    ## Installation
    Brief installation description
    
    ## Project features
    - Feature 1
    - Feature 2
    
    ## Frontend development
    ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white) ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white) ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white)
    
    ## Backend development
    ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white) ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white) ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white)
    
    ## Testing 
    ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white) ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white) ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white)
    
    ## Tools 
    ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white) ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white) ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white)`;
	return <Container>{md}</Container>;
};

export default Markdown;
