pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'sudo chown -R 501:20 "/.npm"'
                sh 'echo "install all dependencies"'
                sh 'npm install'
                sh 'Installation terminée'
                sh 'npm start'
            }
        }
    }
}