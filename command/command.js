const statusUpdateService = {
    statusUpdates: {},
    sendUpdate: function(status) {
        let id = Math.floor(Math.random() * 1000000);
        statusUpdateService.statusUpdates[id] = status;
        return id;
    },

    destroyUpdate: id => {
        delete statusUpdateService.statusUpdates[id]
    }
}

function createSendStatusCmd(service, status){
    let postId = null;

    const command = () =>{
        postId = service.sendUpdate(status);
    }

    command.undo = () => {
        if(postId) {
            service.destroyUpdate(postId);
            postId = null;
        }
    }

    command.serialize = () => {
        return {type: 'status', action: 'post', status: status}
    }

    return command;
}