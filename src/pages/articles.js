import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleItem from "../components/ArticleItem"

const ArticlesPage = ({data}) => {

    const articles = data.allContentfulBlogPost.nodes;

    return (
        <Layout>
            <SEO title="Articles" />

            <h1>I've <span className="theme-primary-colour bold">written.</span></h1>

            <div className="articles">
                {
                    articles.map((item, i) => 
                        <div className="itemWrapper" key={i}> 
                            <ArticleItem index={i} data={item}/> 
                        </div>
                    )
                }    
            </div>


           
    </Layout>
  )
}

export default ArticlesPage

export const pageQuery = graphql`
query ArticlesQuery {
    allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
        nodes {
            title
            description {
                description
            }
            previewText {
                previewText
            }
            slug
            publishDate
            heroImage {
                sizes(maxHeight: 500, cropFocus: CENTER) {
                    ...GatsbyContentfulSizes
                }
            }
        }
    }
}
`
