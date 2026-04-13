function courseDisplayer(courseInformation = {}){
        const arrayProps = ["courseName", "courseDuration", "courseOwner"];
        for(const key in courseInformation){
            if(!arrayProps.includes(key))
                throw new Error("you cannot define more than the course properties");
        }
        const {
            courseName = "ES6",
            courseDuration = "3days",
            courseOwner = "JavaScript"
        } = courseInformation;
        console.log(`course name : ${courseName}, duration ${courseDuration}, owner ${courseOwner}`);
}

courseDisplayer({
    courseName : "html5"
});
