import { range } from './utils';

const gridStyles = {
  width: '100px',
  height: '100px',
  border: 'solid grey',
  borderRadius: '5px',
};

function Grid({ numRows, numCols }) {
  return (
    <div style={{}} className="grid">
      {range(0, numRows).map((rowIndex) => (
        <div key={rowIndex} className="row">
          {range(0, numCols).map((colIndex) => (
            <div key={colIndex} className="cell" style={gridStyles}></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
