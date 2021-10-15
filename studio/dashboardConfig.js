export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '616935322f313d832b380b7a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vcp1z5eh',
                  apiId: '38035f46-b60c-4ed4-a849-6d20b2d0e331'
                },
                {
                  buildHookId: '616935320a7bff8fb3cadca5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q66qv1cw',
                  apiId: '1600dbed-698b-4275-b96b-56a3ce15232d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kevinfoerster/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q66qv1cw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
