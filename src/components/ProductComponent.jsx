import styled from "styled-components"

export default function ProductComponent({ productUrl, imageUrl, title, description, price }) {
  return (
    <ContainerProductComponent>
      <a href={productUrl} target="_blank" rel="noopener noreferrer" >
        <div className="cont_recommendation">
          <div className="cont_image">
            <img src={imageUrl} alt="product" />
          </div>
          <div className="cont_data">
            {price &&
              <div className="cont_price">
                <p className="price">${price}</p>
              </div>
            }
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
          </div>
        </div>
      </a>
    </ContainerProductComponent>
  )
}

const ContainerProductComponent = styled.div`
  margin-top: 10px;
  height: max-content;
  background-color: #fff;
  border-radius: 10px;
  a{
    height: 100;
    color: black;
    .cont_recommendation{
      width: 100%;
      height: 100%;
      border: 1px solid #eee;
      transition: 0.2s;
      .cont_image{
        border-bottom: 1px solid #eaeaea;
        position: relative;
        height: 70%;
        img{
          border-radius: 10px 10px 0 0;
          height: 100%;
          max-height: 200px;
          max-width: 100%;
        }
      }
      .cont_data{
        text-align: left;
        padding: 20px;
        .cont_price{
          /* position: absolute;
          right: 5px;
          bottom: 5px;
          padding: 15px;
          background: #3580e0;
          border-radius: 50px;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center; */
          .price{
            font-size: 24px;
            font-family: "Montserrat";
          }
        }
        .title{
          font-size: 16px;
          font-weight: 400;
        }
        .description{
          font-size: 12px;
          font-style: italic;
        }
      }
      &:hover{
        box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
        border-radius: 10px;
      }
    }
  }
`