import React from 'react'
import { Link } from 'gatsby'
import { Section, ContainerMd, Item, Image } from '../..'

export default ({ background, halign, post, link }) => {
  console.log(link)
  return (
    <Section background={background} key={post.id}>
      <Link to={link}>
        <ContainerMd>
          <Item halign={halign}>
            <h3> {post.title} </h3>
            <h5>{post.author}</h5>
            <h5>{post.datePublished}</h5>
          </Item>
        </ContainerMd>
        <ContainerMd>
          <Image imageUrl={post.image.file.url} />
        </ContainerMd>
      </Link>
    </Section>
  )
}