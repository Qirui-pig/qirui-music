import styled from 'styled-components';
import bgImg from '@/assets/img/wrap-bg.png'

export const SongDetailWrapper = styled.div`
  .content {
    background: url(${bgImg}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`

export const SongDetailLeft = styled.div`
  width: 710px;
`

export const SongDetailRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`
