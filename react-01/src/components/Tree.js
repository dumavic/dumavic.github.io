import './tree.css';

function Tree(tree) {
  return (
<section className="tree">
<h3>{tree.name}</h3>
<p>{tree.description}</p>
</section>
  );
}

export default Tree;
