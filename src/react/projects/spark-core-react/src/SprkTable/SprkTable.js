import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash';

const SprkTable = (props) => {
  const {
    data,
    columns,
    variant,
    idString,
    additionalContainerClasses,
    additionalTableClasses,
    children,
    ...other
  } = props;

  const wrapperClassNames = classnames(
    'sprk-b-TableContainer',
    additionalContainerClasses,
  );

  const tableClassNames = classnames(
    'sprk-b-Table',
    { 'sprk-b-Table--secondary': variant === 'secondary' },
    { 'sprk-b-Table--secondary-row-comparison': variant === 'secondaryRowComparison' },
    { 'sprk-b-Table--grouped-columns': variant === 'grouped' },
    { 'sprk-b-Table--row-comparison': variant === 'rowComparison' },
    additionalTableClasses,
  );

  if (variant === 'grouped') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          <thead className="sprk-b-Table__head">
            {columns
            && (
              columns.map(row => (
                <tr key={uniqueId('row_')}>
                  {row.map(col => <th key={uniqueId('th')} rowSpan={col.rowspan} colSpan={col.colspan}>{col.header}</th>)}
                </tr>
              ))
            )
            }
          </thead>

          {data
          && (
          <tbody>
            {data.map(row => (
              <tr key={uniqueId('row_')}>
                {
                  Object.values(row).map(item => <td key={uniqueId('td_')}>{item}</td>)
                }
              </tr>
            ))}
          </tbody>
          )
          }
        </table>
      </div>
    );
  }

  else if (variant === 'rowComparison') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          <thead className="sprk-b-Table__head">
            {columns
            && (
              <tr>
                <th className="sprk-b-Table__empty-heading" />
                {columns.map(col => <th key={uniqueId('th_')}>{col.header}</th>)}
              </tr>
            )
            }
          </thead>

          {data
          && (
          <tbody>
            {data.map(row => (
              <tr key={uniqueId('row_')}>
                <th>{row.rowHeading}</th>
                {columns
                  && (
                    columns.map(col => <td key={uniqueId('td_')}>{row[col.name]}</td>)
                  )
                }
              </tr>
            ))}
          </tbody>
          )
          }
        </table>
      </div>
    );
  } 
  
  else if (variant === 'secondaryRowComparison') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          {data
          && (
          <tbody>
            {data.map(row => (
              <tr key={uniqueId('row_')}>
                <th>{row.rowHeading}</th>
                {columns
                && (
                  columns.map(col => <td key={uniqueId('td_')}>{row[col.name]}</td>)
                )
                }
                {row.button
                && (
                  <td>
                    {row.button}
                  </td>
                )
                }
              </tr>
            ))}
          </tbody>
          )
          }
        </table>
      </div>
    );
  }

  else if (variant === 'html') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          {children}
        </table>
      </div>
    );
  }

  else {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          <thead className="sprk-b-Table__head">
            {columns
            && (
            <tr>
              {columns.map(col => <th key={uniqueId('th_')}>{col.header}</th>)}
            </tr>
            )
            }
          </thead>

          {data
          && (
          <tbody>
            {data.map(row => (
              <tr key={uniqueId('row_')}>
                {columns
                && (
                  columns.map(col => <td key={uniqueId('td_')}>{row[col.name]}</td>)
                )
                }
              </tr>
            ))}
          </tbody>
          )
          }
        </table>
      </div>
    );
  }
};

SprkTable.propTypes = {
  // An array used to render the table headings - Can be an array of objects or an array of arrays
  columns: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.array),
  ]),
  // An array of objects used to map and render the table row data
  data: PropTypes.arrayOf(PropTypes.object),
  // A string to determine what variant of the table should render
  variant: PropTypes.oneOf(['default', 'secondary', 'grouped', 'rowComparison', 'secondaryRowComparison', 'html']),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the table wrapper
  additionalContainerClasses: PropTypes.string,
  // Any additional classes to add to the table
  additionalTableClasses: PropTypes.string,
  // And children markup to be rendered
  children: PropTypes.node,
};

SprkTable.defaultProps = {
  columns: undefined,
  data: undefined,
  variant: 'default',
  idString: undefined,
  additionalContainerClasses: undefined,
  additionalTableClasses: undefined,
  children: undefined,
};

export default SprkTable;
