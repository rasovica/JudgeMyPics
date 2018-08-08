import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';


Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:70cc6191-a8f2-4731-8097-9dcee0891fbc',
    region: 'us-east-1',
    userPoolId: 'us-east-1_bCepFvNQ1',
    userPoolWebClientId: 'v84pjf76pq6t591c2dhthvc16',
    mandatorySignIn: true
  },
  API: {
    endpoints: [
      {
        name: 'main',
        endpoint: 'https://mfit2diiob.execute-api.us-east-1.amazonaws.com/dev',
        service: 'lambda',
        region: 'us-east-1'
      }
    ]
  }
});

export async function signIn(data: any) {
  console.log(data);
  try {
    return await Auth.signIn(data.username, data.password);
  } catch (e) {
    console.log(e);
    throw e.message;
  }
}

export async function signUp(data: any) {
  try {
    return await Auth.signUp({
      username: data.username,
      password: data.password,
      attributes: {
        email: data.email
      }
    });
  } catch (e) {
    console.log(e);
    throw e.message;
  }
}
