function getFilesToBackup(lastBackup, changes) {
    
    let idbackup = [];
    
    changes.forEach((v) => {
        if (v[1] > lastBackup) {
            idbackup.push(v[0]);
        }
    });
    
    return [...new Set(idbackup)].sort()
}
