import React from 'react';
import useState from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align= {(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
        //old (columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align= {columns[columnIndex].numeric || false ? 'right' : 'left'}
        //old - columns[columnIndex].numeric || false ? 'right' : 'left'
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---


function createData(alert, message,tag, name) {
  return {alert, message, tag, name};
}



export default function Alert(props) {

    let alerts = [];
    const [rows, setRows] = React.useState(alerts);



    function createAlerts(incomingData) {
        props.data.filter(person => person.heartrate > 180)
                  .map(person => alerts.push(createData(<Button onClick = {() => clearNotification(person.name, "HR")}>{person.name}</Button>, "High HeartRate!","HR", person.name)))
        props.data.filter(person => person.oxygen < 30)
                  .map(person => alerts.push(createData(<Button onClick = {() => clearNotification(person.name, "O")}>{person.name}</Button>, "Low Oxygen!", "O", person.name)))
        props.data.filter(person => person.temp > 40)
                  .map(person => alerts.push(createData(<Button onClick = {() => clearNotification(person.name, "TP")}>{person.name}</Button>, "High Temperature!", "TP", person.name)))
    }
    createAlerts(props.data);

    function clearNotification(name, tag){
      console.log(alerts)
      alerts = alerts.filter(a => !(a.name == name && a.tag == tag));
      setRows(alerts);
    }

  return (
    <Paper style={{ height: '100%', width: '100%' }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 600,
            label: 'Alerts',
            dataKey: 'alert',
          },
          {
            width: 600,
            label: 'Message',
            dataKey: 'message',
          },
        ]}
      />
    </Paper>
  );
}