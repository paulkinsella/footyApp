import React from "react";
import "./App.scss";

export class Sample extends React.Component {
  render() {
    return (
      <>
        <table>
          <tr className="sample">
            <th className="champsLeague">Champions League</th>
            <th className="europaLeague">Europa League</th>
            <th className="relegationZone">Relagation Zone</th>
          </tr>
        </table>
      </>
    );
  }
}
