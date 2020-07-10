import React from 'react'
import { Link } from 'gatsby'
import { ContainerXL, Item, Image } from '../..'

export default ({ halign, post, link }) => {
  console.log(link)
  return (
    <Link to={link}>
      <ContainerXL background="light" row>
        <Image imageUrl={post.image.file.url} />
        <Item halign={halign}>
          <h3> {post.title} </h3>
          <h5>{post.author}</h5>
          <h5>{post.datePublished}</h5>
        </Item>
      </ContainerXL>
    </Link>
  )
}