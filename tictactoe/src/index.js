import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button
      className={`square ${props.highlighted ? "square-highlight" : ""}`}
      onClick={props.onClick}
    >
      { props.value }
    </button>
  );
}

function isDraw(squares) {
  return squares.every(e => e) && !getWinner(squares);
}

function getWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i],
      };
    }
  }
  return null;
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        highlighted={this.props.highlights.includes(i)}
      />
    );
  }

  render() {
    const rows = [];
    for(let i=0;i<3;i++)
    {
      const squares = [];
      for(let j=0;j<3;j++)
      {
        const position = i * 3 + j;
        squares.push(this.renderSquare(position));
      }
      rows.push(
        <div className="board-row">
          {squares}
        </div>
      );
    }
    return (
      <div>
        {rows}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        position: null,
      }],
      moveNumber: 0,
      xIsNext: true,
      currentPosition: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  jumpTo(move) {
    this.setState({
      moveNumber: move,
      xIsNext: (move % 2) === 0,
      currentPosition: this.state.history[move].position
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.moveNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (getWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        position: i
      }]),
      currentPosition: i,
      moveNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.moveNumber];
    const winner = getWinner(current.squares);
    let banner;
    if(winner) {
      banner = 'Winner: ' + winner.winner;
    } else if(isDraw(current.squares)) {
      banner = 'Draw';
    } else {
      banner = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.map((step, move) => {
      const row = Math.floor(step.position / 3);
      const col = step.position % 3;
      const stepDescription = `(${row}, ${col})`;
      const desc = move ?
        'Go to move ' + stepDescription:
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {(move === this.state.moveNumber) ? <strong>{desc}</strong> : desc}
          </button>
        </li>
      );
    });

    const highlights = [this.state.currentPosition];
    if(winner)
    {
      highlights.push(...winner.line);
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={this.handleClick}
            highlights={highlights}
          />
        </div>
        <div className="game-info">
          <div>{banner}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
