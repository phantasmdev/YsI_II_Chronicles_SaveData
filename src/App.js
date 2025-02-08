import "./App.css";

function AppTitle() {
  return <h1>Ys I&II+ Chronicles Save Files</h1>;
}

function AppDesc() {
  return (
    <p>
      This page shows table data of some of the save slots made during my run of
      Ys I&II on Nightmare difficulty.
    </p>
  );
}

const savefiles = [
  // 'template': { SlotNo: 0, Level: 1, EXP: 0, STR: 0, DEF: 0, HP: 0, Gold: 0 },
  {
    SlotNo: 0,
    Level: 10,
    EXP: 99999,
    STR: 225,
    DEF: 240,
    HP: 255,
    Gold: 79095,
  },
  { SlotNo: 1, Level: 5, EXP: 1610, STR: 115, DEF: 90, HP: 100, Gold: 1790 },
  { SlotNo: 2, Level: 7, EXP: 11120, STR: 155, DEF: 170, HP: 116, Gold: 7563 },
  {
    SlotNo: 8,
    Level: 10,
    EXP: 99999,
    STR: 225,
    DEF: 205,
    HP: 255,
    Gold: 85479,
  },
  {
    SlotNo: 46,
    Level: 19,
    EXP: 99999,
    STR: 255,
    DEF: 255,
    HP: 255,
    Gold: 99999,
  },
];

function TableData() {
  return (
    <div>
      <table border="1" align="center">
        <tr className="tablesections">
          <td>Slot</td>
          <td>Level</td>
          <td>EXP</td>
          <td>STR</td>
          <td>DEF</td>
          <td>HP</td>
          <td>Gold</td>
        </tr>

        {savefiles.map((saveslot) => (
          <SaveSlot saveslot={saveslot} />
        ))}
      </table>
    </div>
  );
}

function SaveSlot(props) {
  return (
    <tr className="slotdata">
      <td>{props.saveslot.SlotNo}</td>
      <td>{props.saveslot.Level}</td>
      <td>{props.saveslot.EXP.toLocaleString()}</td>
      <td>{props.saveslot.STR}</td>
      <td>{props.saveslot.DEF}</td>
      <td>{props.saveslot.HP}</td>
      <td>{props.saveslot.Gold.toLocaleString()}</td>
    </tr>
  );
}

function App() {
  return (
    <div className="App">
      <AppTitle />
      <AppDesc />
      <TableData />
    </div>
  );
}

export default App;
