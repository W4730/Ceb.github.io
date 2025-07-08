
        // Make all buttons with class 'checkout' go to checkout.html
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('button.checkout').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    window.location.href = 'checkout.html';
                });
            });
        });
