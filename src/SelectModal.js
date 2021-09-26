import React , {useState} from "react";
import {Input, Modal, Table, Row, Col} from 'antd'
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import "./SelectModal.css"

const SelectModal = (props) => {
  const {titleModal,columns,dataSource,search__Placeholder,width} = props.data
  const [isOpen,setIsOpen] = useState(false)
  const [data,setData] = useState(dataSource);
  const [dataSelect, SetDataSelect] = useState(null);
  const [toggleColor, SetToggleColor] = useState([]);

  
  const excludeColumns = [];
  //const excludeColumns = ["age"];

  //Search On Change
  const onSearch = value => {
    filterData(value)
  }

  //Filter Data
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataSource);
    else {
      const filteredData = dataSource.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }

  const changeRowColor = (rIndex) => {

      toggleColor.push(rIndex);
      if (toggleColor.length == 1) 
      {
           document.querySelector(`table tbody tr:nth-of-type(${rIndex+1})`).style.backgroundColor = "#E5F3FF";;
      }
      else 
      {
          let lastRow = toggleColor.at(-2)
          console.log(lastRow)

          document.querySelector(`table tbody tr:nth-of-type(${lastRow+1})`).style.backgroundColor = "transparent";
          document.querySelector(`table tbody tr:nth-of-type(${rIndex+1})`).style.backgroundColor = "#E5F3FF";
       }
  };

  const handleOK = () => {
    setIsOpen(false);
  };

  const onSelectModalClick = () => {
     setIsOpen(true)
  }

  return <>
          <Row>
              <Col 
                  xs={24} sm={24} md={24} xl={24} lg={24}
              >
                <Input
                    style={{borderRadius:8}}
                    suffix={<CaretDownOutlined 
                                  style={{ backgroundColor: "#C9CCD5"}} 
                                  onClick={onSelectModalClick} />}
                    value={dataSelect? dataSelect.name : undefined}
                  />
              
              </Col>

              <Modal
                      id="modal__SelectModal"
                      title={titleModal}
                      style={{borderRadius:"8px"}}
                      centered
                      visible={isOpen}
                      okText = "Select"
                      onOk={() => handleOK(false)}
                      onCancel={() => setIsOpen(false)}
                      width={width? width : 1000}
                    >
                      <Col 
                            xs={24} sm={24} md={12} xl={12} lg={12}
                        >
                        <Input 
                          style={{borderRadius:"8px",width:"100%"}}
                          placeholder={search__Placeholder}
                          onChange={(e)=>onSearch(e.target.value)}
                          suffix={<SearchOutlined />}
                        />
                      </Col>
                      <br />
                    <Table 
                        id = "table__modal"
                        columns={columns} 
                        dataSource={data} 
                        pagination={false}
                        size="small" 
                        rowKey={record => record.ID}
                        onRow={(record, rowIndex) => ({
                        onClick: (e) => {
                            changeRowColor(rowIndex, record);
                            SetDataSelect(record)
                        }
                    })}
                        
                        
                        />
              </Modal>


          </Row>
    
  </>
}

export default SelectModal