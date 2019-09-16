import React, { Component } from 'react'

import Content from '../layout/Content'
import ProductsList from '../reusable/ProductsList'
import ProductForm from '../reusable/ProductForm'

class Management extends Component {
  state = {
    isDisplayingForm: false
  }

  toggleProductCreate = isDisplayingForm => () => this.setState({ isDisplayingForm })
  
  render() {
    const { isDisplayingForm } = this.state

    return (
      <Content>
        <div className="management">
          <div className="management__toolbar">
            { isDisplayingForm
              ? (
                <button className="management__toolbar-button" onClick={this.toggleProductCreate(false)}>
                  Cancel
                </button>
              )
              : (
                <button className="management__toolbar-button" onClick={this.toggleProductCreate(true)}>
                  Add a new product
                </button>
              )
            }
          </div>

          <div className="management__products">
            { isDisplayingForm 
              ? <ProductForm />
              : <ProductsList type="management" />
            }
          </div>
        </div>
      </Content>
    )
  }
}

export default Management
