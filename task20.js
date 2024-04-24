// oauth 2.0 google authentication on the browser

const CLIENT_ID = '93588363481-fjhrpc3nm1n0mb2le4g6jtcqm21v05rh.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

      function initiateOAuth2Flow() {
        const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        const form = document.createElement('form');
        form.setAttribute('method', 'GET');
        form.setAttribute('action', oauth2Endpoint);

        const oauthParameters = {
          client_id: CLIENT_ID,
          redirect_uri: REDIRECT_URI,
          scope: 'openid', // Only requesting OpenID Connect authentication
          state: 'try_sample_request',
          include_granted_scopes: 'true',
          response_type: 'token',
        };

        for (const [key, value] of Object.entries(oauthParameters)) {
          const input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', key);
          input.setAttribute('value', value);
          form.appendChild(input);
        }

        document.body.appendChild(form);
        form.submit();
      }

      const urlHash = location.hash.substring(1);
      const urlParameters = new URLSearchParams(urlHash);

      if (urlParameters.has('access_token')) {
       
        const accessToken = urlParameters.get('access_token');
        console.log('Access Token:', accessToken);
      
      }
