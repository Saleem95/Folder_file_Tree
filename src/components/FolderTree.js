import React, { useState } from 'react';
import fileStructure from '../config';
import { FaRegImage, FaFolder, FaFolderOpen, FaFile, FaReact, FaFileAlt, FaHtml5, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript} from "react-icons/bi";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { BsFiletypeJson } from "react-icons/bs";


const icons = {
  js: <IoLogoJavascript />,
  html: <FaHtml5 />,
  css: <FaCss3 />,
  txt: <FaFileAlt />,
  svg: <FaRegImage/>,
  ts: <BiLogoTypescript />,
  json: <BsFiletypeJson />,
  tsx: <FaReact/>
  
};

const FolderTree = () => {
  const renderTree = (nodes) => (
    <ul>
      {nodes.map((node) => (
        <TreeNode node={node} key={node.name} />
      ))}
    </ul>
  );

  return <div>{renderTree(fileStructure)}</div>;
};

const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      {node.type === 'folder' ? (
        <>
          <div onClick={toggleOpen} style={{ cursor: 'pointer' }}>
            {isOpen ? <MdExpandLess /> : <MdExpandMore />}
            {isOpen ? <FaFolderOpen /> : <FaFolder />} {node.name}
          </div>
          {isOpen && node.children && (
            <div style={{ marginLeft: 20 }}>
              {node.children.map((child) => (
                <TreeNode node={child} key={child.name} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div>
          {icons[node.extension] || <FaFile />} {node.name}
        </div>
      )}
    </li>
  );
};

export default FolderTree;

