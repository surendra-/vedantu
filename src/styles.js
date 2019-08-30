const styles = {
    rootContainer:{
        padding:20,
    },
    cardContainer:{
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-around',
    },
    image: {
        width:100,
        height: 100,
        borderRadius:'50%'
    },
    card:{
        textAlign: 'center',
        padding: 10,
        width: 200,
        marginTop:10,
        background: '#fff',
        boxShadow:'0px 0px 1px 0px #aaa',
    },
    repoName:{
        overflow:'hidden',
    },
    pagination:{
        textAlign:'center',
        padding: 20
    },
    chipContainer:{
        display:'flex',
        justifyContent: 'space-around',
        margin:'10px 0px'
    },
    chip:{
        background: '#aaa',
        borderRadius: 10,
        fontSize: 10,
        padding: 5,
    },
    description:{
        fontSize:'12px',
        color:'#999',
        height: 30,
        overflow: 'hidden'
    },
    viewProfile:{
        background:'#50a6ff',
        margin: -10,
        marginTop:12,
        padding:10,
        textTransform:'uppercase'
    },
    emptyError:{
        marginTop:30,
        color: '#999',
    }
}

export default styles;