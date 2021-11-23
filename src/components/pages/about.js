import React from 'react';

const styles = {
    titles: {
        textAlign: "center",
        fontSize: 60
    },
    aboutMe: {
        textAlign: "center",
        fontSize: 24
    },
}

export default function About() {
    return (
        <div>
            <h1 style={styles.titles}>Savion Elsey-Williams</h1>
            <p style={styles.aboutMe}>I am 20 years old and I recently finished my Computer Science degree at the University of Pennsylvania. I aspire to become a web developer/programmer. I currently reside in Northern Delaware.</p>
            <p style={styles.aboutMe}>My current skills are: JavaScript, CSS, HTML, Web APIs, JQuery, Insomnia, Github, React, Express.js, Node.js, SQL, MongoDB, Bootstrap</p>
        </div>
    );
}