import React from 'react';
import ReactDOM from 'react-dom';

var nums = [
  ':zero: ',
  ':one: ',
  ':two: ',
  ':three: ',
  ':four: ',
  ':five: ',
  ':six: ',
  ':seven: ',
  ':eight: ',
  ':nine: '
];

var textToEmoji = (text) => {
  let char_re = RegExp('[a-zA-Z]');
  let num_re = RegExp('[0-9]');
  let emojiText = '';
  for (const c of text) {
    if (char_re.exec(c)) {
      emojiText += `:regional_indicator_${ c.toLowerCase() }: `;
    } else if (num_re.exec(c)) {
      emojiText += nums[parseInt(c)];
    } else if (c === ' ') {
      emojiText += '  ';
    }
  }

  return emojiText;
};

export default class EmojiConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      emojiText: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ emojiText: textToEmoji(this.state.text) });
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="row justify-content-center py-1">
            <div class="col col-8 text-center">
              <p class="h3">Enter Text to Convert</p>
            </div>
          </div>
          <div class="row justify-content-center py-1">
            <div class="col col-8">
              <input type="text" class="form-control form-control-lg" value={this.state.text} onChange={this.handleChange}/>
            </div>
          </div>
          <div class="row justify-content-center py-1">
            <div class="col col-8">
              <button type="button" class="btn btn-primary btn-lg btn-block" value="Convert" onClick={this.handleSubmit}>Convert</button>
            </div>
          </div>
          <div class="row justify-content-center py-1">
            <div class="col col-8">
              <textarea class="form-control form-control-lg bg-white" style={{"font-size": "14px"}} rows="5" value={this.state.emojiText} readOnly/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <EmojiConverter />,
  document.getElementById('root')
);