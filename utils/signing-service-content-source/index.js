import axios from 'axios';

import { ARC_ACCESS_TOKEN, CONTENT_BASE, RESIZER_TOKEN_VERSION, SIGNING_SERVICE_DEFAULT_APP } from 'fusion:environment';

const params = {
  id: 'text',
  service: 'text',
  serviceVersion: 'text',
};

const fetch = ({ id, service = SIGNING_SERVICE_DEFAULT_APP, serviceVersion = RESIZER_TOKEN_VERSION }) =>
  axios({
    url: `${CONTENT_BASE}/signing-service/v1/sign/${service}/${serviceVersion}/${encodeURI(id)}`,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${ARC_ACCESS_TOKEN}`,
    },
    method: 'GET',
  }).then(({ data: content }) => content);

export default {
  fetch,
  params,
  http: false,
  ttl: 31536000,
};
