import React from 'react';

const styles = {
    title: {
        paddingTop: 30,
        fontSize: 60
    },
    card: {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        width: "50%",
        textAlign: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    container: {
        padding: "2px 16px"
    }
}

export default function Projects() {
    return (
        <div>
            <div style={styles.card}>
                <div style={styles.container}>
                    <h1 style={styles.title}>Get To Work</h1>
                    <p><a href="https://github.com/Sav2234/project-management-application" target="_blank">Github repo</a></p>
                    <p><a href="https://pacific-escarpment-60753.herokuapp.com/">Deployed App</a></p>
                </div>
            </div>

            <div style={styles.card}>
                <div style={styles.container}>
                    <h1 style={styles.title}>The Places You'll Go</h1>
                    <p><a href="https://github.com/Sav2234/ThePlacesYoullGo" target="_blank">Github repo</a></p>
                    <p><a href="https://pacific-stream-66828.herokuapp.com/">Deployed App</a></p>
                </div>
            </div>

            <div style={styles.card}>
                <div style={styles.container}>
                    <h1 style={styles.title}>Team Profile Generator</h1>
                    <p><a href="https://github.com/Sav2234/teamprofile" target="_blank">Github repo</a></p>
                </div>
            </div>

            <div style={styles.card}>
                <div style={styles.container}>
                    <h1 style={styles.title}>Code Quiz</h1>
                    <p><a href="https://github.com/Sav2234/timedquiz" target="_blank">Github repo</a></p>
                    <p><a href="https://sav2234.github.io/timedquiz/">Deployed App</a></p>
                </div>
            </div>

            <div style={styles.card}>
                <div style={styles.container}>
                    <h1 style={styles.title}>Fitness Tracker</h1>

                    <p><a href="https://github.com/Sav2234/fitnesstracker" target="_blank">Github repo</a></p>
                    <p><a href= "https://gentle-chamber-45428.herokuapp.com/?id=618dccba91d9130016daddeb" target="_blank">Deployed App</a></p>
                </div>
            </div>

            <div style={styles.card}>
                <div style={styles.container}>
                    <h1 style={styles.title}>Tech Blog</h1>
                    <p><a href="https://github.com/Sav2234/techblog" target="_blank">Github repo</a></p>
                    <p><a href=" https://sheltered-everglades-74384.herokuapp.com/" target="_blank">Deployed App</a></p>
                </div>
            </div>

            <div style={styles.card}>
                <div style={styles.container}>
                    <h1 style={styles.title}>Password Generator</h1>
                    <p><a href="https://github.com/Sav2234/password_sys.git" target="_blank">Github repo</a></p>
                    <p><a href="https://sav2234.github.io/password_sys/" target="_blank">Deployed App</a></p>
                </div>
            </div>

            <div style={styles.card}>
                <div style={styles.container}>
                    <h1 style={styles.title}>E-Commerce Back End</h1>
                    <p><a href="https://github.com/Sav2234/password_sys.git" target="_blank">Github repo</a></p>
                    <p><a href="https://sav2234.github.io/password_sys/" target="_blank">Deployed App</a></p>
                </div>
            </div>

            <div style={styles.card}>
                <div style={styles.container}>
                    <h1 style={styles.title}>Readme Generator</h1>
                    <p><a href="https://github.com/Sav2234/readmegen" target="_blank">Github repo</a></p>
                </div>
            </div>
        </div>
    )  
}