import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FindUser from "./findUser";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FindUser);
