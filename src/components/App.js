import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Fernando Lopes',
        avatar: 'https://avatars0.githubusercontent.com/u/58493?s=400&v=4',
        time: 'há 3 min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis velit libero. Phasellus eu hendrerit eros. Vivamus non fringilla nisl, vitae dapibus justo. Fusce molestie malesuada sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras nec tortor egestas, vulputate lacus sollicitudin, commodo purus. Pellentesque ultricies sodales ligula, at lobortis est commodo non. Duis libero est, molestie eget orci sed, vestibulum posuere dolor. Cras eleifend ante leo, eu vestibulum metus sagittis vitae. In eu volutpat felis. Nam tincidunt turpis ac metus tempor tincidunt.'
      },
      {
        id: 2,
        name: 'Marcio Delgado',
        avatar: 'https://avatars0.githubusercontent.com/u/282759?s=400&v=4',
        time: 'há 5 min',
        body:
          'Sed non vestibulum sem. Mauris a sem et risus aliquet dapibus id nec leo. Nulla interdum vehicula augue, pharetra tincidunt tellus varius et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras interdum tristique lorem non rhoncus. Nunc pellentesque, libero non laoreet hendrerit, nibh lectus tristique sapien, in pharetra lacus nibh sed est. Mauris sit amet porttitor.'
      },
      {
        id: 3,
        name: 'Marcela da Fonseca',
        avatar: 'https://avatars0.githubusercontent.com/u/276834?s=400&v=4',
        time: 'há 7 min',
        body:
          'Praesent non semper metus. In hac habitasse platea dictumst. Nullam a iaculis risus. Mauris efficitur fringilla turpis id scelerisque. Cras ut nisl elit. Suspendisse nisl augue, luctus sit amet ante vehicula, posuere accumsan erat. Curabitur dictum vulputate ullamcorper. Donec vestibulum scelerisque tincidunt. Ut quis dignissim risus. Ut elit neque, condimentum et ornare at, mollis feugiat libero. Phasellus dictum velit in mauris vestibulum, in faucibus ex varius.'
      },
    ],
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className='post-container'>
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}