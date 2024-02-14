const AWS = require('aws-sdk');

const sns = new AWS.SNS();

exports.handler = async (event) => {

    const message = `A new AWS account (${event.accountId}) has been created in the organization.`;
    const params = {
        Subject: 'New AWS Account Created',
        Message: message,
        TopicArn: process.env.SNS_TOPIC_ARN
        };
        
        try {
            await sns.publish(params).promise();
            console.log('Email notification sent successfully.');
        } catch(err) {
            console.error('Error sending email notification:', err);
        }
    };
