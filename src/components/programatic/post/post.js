import React from 'react'
import { Section, ContainerXL, Item, Image } from '../..'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-left">{children}</p>

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
        [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
        [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
        [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
        [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
        [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    },
}


export default ({post, background, halign}) => {

    console.log(post.image.file.url)

    return (
        <Section background={background} key={post.id}>
            <ContainerXL>
                <Item halign={halign}>
                    <Image imageUrl={post.image.file.url} />
                    <h3> {post.title} </h3>
                    {documentToReactComponents(post.body.json, options)}
                </Item>
            </ContainerXL>
        </Section>
    )
}
