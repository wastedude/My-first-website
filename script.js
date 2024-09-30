<script>
    document.querySelector('form').addEventListener('submit', function(event) {
        let name = document.getElementById('name').value;
        if (!name) {
            alert("Name is required!");
            event.preventDefault();  // Prevent form submission if name is empty
        }
    });
</script>