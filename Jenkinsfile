pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh "npm install"
            }
        }
         stage('test') {
            steps {
                sh "npm test"
            }
        }
        stage('deploy') {
            steps {
                echo "Code is being deployed"
            }
        }
    }
}