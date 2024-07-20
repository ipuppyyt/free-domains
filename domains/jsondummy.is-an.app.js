// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'An open source contribution project. Free dummy data api for developers.',
  domain: 'is-an.app',
  subdomain: 'jsondummyapi',
  owner: {
    repo: 'https://github.com/ipuppyyt/JSONDummy',
    email: 'dhanush6102002@gmail.com',
  },
  record: {
    TXT: ['_vercel', 'vc-domain-verify=jsondummy.is-an.app,10262591f1fb15c26b8a'],
  },
})
