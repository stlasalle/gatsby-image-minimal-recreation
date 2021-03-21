import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout } from '@components/layout'
import { Grid, LogoContainer } from './styles'

export const Landing: React.FC = () => {
  return (
    <Layout>
      <Grid>
        <LogoContainer>
          <StaticImage
            src="../../../images/hsr-cropped.png"
            alt="Hope St Radio Logo"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </LogoContainer>
      </Grid>
    </Layout>
  )
}
