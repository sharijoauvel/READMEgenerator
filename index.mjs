import inquirer from "inquirer";
import fs from "fs/promises";

/* Questions to be asked*/
let {description, content, installation, usage, contributing, tests, licence,questions} = await inquirer 
    .prompt([
    
        {    
        type: 'input',
        name: 'description',
        message: "Write a description of your project:",
        },

        {    
            type: 'input',
            name: 'content',
            message: "Write your table of content:",
            },


        {    
                type: 'input',
                name: 'installation',
                message: "Do you have an installation process?",
                },
    

        {    
                type: 'input',
                name: 'usage',
                message: "What is the project usage?",
                },

                {
                    type: 'list',
                    name: 'licence',
                    message: "Please select a licence for your project.",
                    choices: ['GNU','Apache', 'MIT', 'Boost'],
                    
                },


            {    
                type: 'input',
                name: 'contributing',
                message: "Who is contributing to the project?",
            },

            {    
                type: 'input',
                name: 'tests',
                message: "Are there tests for the project?",
            },

            {
                type: "input",
                name: "questions",
                message: "Please provide contact details for questions:",
                default(){
                    return 'Email';
                }
            },
            
         

        ])

        /*
            let readmeText = `#Project Title
            ${generateLicence(size)}`

            function generateLicence(licence){
                console.log(licence);
                if (licence === "Boost"){
                    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)]"
                }

                else if (licence === "Apache"){
                    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
                }
                
                else (licence === "GNU");{
                    return "[[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)]"
                }
            } 
            */


           


            /*console.log(response);*/

            fs.writeFile("README.md",
            `## Description
            ${description}
            ## Installaion
            ${installation}
            ## Usage
            ${usage}
            ## Contributing
            ${contributing}
            ## Tests
            ${tests}
            ## Questions
            ${questions}
            ## Licence
            ${licence};
            `
            )
