class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.handleProductUpVote = this.handleProductUpVote.bind(this)
  }
  componentDidMount() {
    this.setState(function() {
      return {
        products: Seed.products
      };
    });
  }
  handleProductUpVote(productId) {
        const votes = [...this.state.products]
        const nextProducts = votes.map(product => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                })
            } else {
                return product
            }
        })
        this.setState(function() {
            return {
                products: nextProducts,
            }
        })
  }
  render() {
    // sort the products by votes
    const products = this.state.products.sort((a, b) => b.votes - a.votes);
    const productComponents = products.map(product => {
      return (
        <Product
          id={product.id}
          key={product.id}
          title={product.title}
          desc={product.description}
          votes={product.votes}
          productImageUrl={product.productImageUrl}
          avatar={product.submitterAvatarUrl}
          url={product.url}
          onVote={this.handleProductUpVote}
        />
      );
    });
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }
  handleUpVote() {
    this.props.onVote(this.props.id);
  }
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} alt="" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon" />
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href={this.props.url}>{this.props.title}</a>
            <p>{this.props.desc}</p>
          </div>
          <div className="extra">
            <span>Submitted By: </span>
            <img src={this.props.avatar} className="ui avatar image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<ProductList />, document.getElementById("content"));
