const firebaseApp = firebase.initializeApp({ 
            
    apiKey: "AIzaSyCccEAJYpOENgYunpjifpP6-6BlnN9CXlc",
    authDomain: "one-page-ceef0.firebaseapp.com",
    projectId: "one-page-ceef0",
    storageBucket: "one-page-ceef0.appspot.com",
    messagingSenderId: "594831752751",
    appId: "1:594831752751:web:359d8014020489637290da"
    });

    // Initialize Firebase

    
    const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {

    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/index.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,

    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
    };

    ui.start('#firebaseui-auth-container', uiConfig);